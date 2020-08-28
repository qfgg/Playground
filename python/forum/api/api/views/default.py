from pyramid.view import view_config
from pyramid.response import Response

from sqlalchemy.exc import DBAPIError

from .. import models


@view_config(route_name='view', renderer='json')
def my_view(request):
    query = request.dbsession.query(models.Page)
    all = query.all()
    return dict(list=all)
