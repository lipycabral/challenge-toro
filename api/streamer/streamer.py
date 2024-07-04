from aiohttp import web
from asyncio import sleep
from quote_generator import SHARE_COMPANIES, SHARE_COMPANIES_LOGO
import json

async def stream_handler(request):
    generator = request.app['GENERATOR']
    ws = web.WebSocketResponse()
    await ws.prepare(request)
    print(f'Connection from {request.host}')

    while True:
        msg = next(generator)
        await ws.send_json(msg)
        await sleep(.1)
        
async def get_handler(request):
    data = []
    for quote, longName in SHARE_COMPANIES.items():
        item_dict = {'quote': quote,'longName': longName, 'logo': SHARE_COMPANIES_LOGO.get(quote)}
        data.append(item_dict)
    return web.json_response({'data': data})
