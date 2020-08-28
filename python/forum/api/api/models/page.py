from sqlalchemy import (
    Column,
    ForeignKey,
    Integer,
    Text
)
from sqlalchemy.orm import relationship

from .meta import Base

class Page(Base):
    __tablename__ = 'pages'
    id = Column(Integer, primary_key=True)
    name = Column(Text, nullable=False)
    data = Column(Text, nullable=False)

    creator_id = Column(ForeignKey('users.id'), nullable=False)
    creator = relationship('User', backref='create_pages')
