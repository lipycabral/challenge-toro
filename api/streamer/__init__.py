import aiohttp_cors
from aiohttp import web

from quote_generator import SHARE_SYMBOLS, QuoteGenerator, SHARE_COMPANIES
from .streamer import stream_handler, get_handler


__version__ = "1.0"


def create_app():
    app = web.Application()
    app.router.add_route("GET", "/quotes_details", get_handler)
    app.router.add_route("GET", "/quotes", stream_handler)
    
    app.router.add_static('/assets/', path='assets', name='assets')

    app['GENERATOR'] = QuoteGenerator(SHARE_SYMBOLS, seed=1)
    
    cors = aiohttp_cors.setup(app, defaults={
        "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
        )
    })

    # Add CORS to each route
    for route in list(app.router.routes()):
        cors.add(route)

    return app
