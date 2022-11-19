from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

Base  = declarative_base()

# name: 'Hermann Fresh',
#     age: 21,
#     degree: 'Mathematics',
#     semester: '3. Bachelor',
#     description: "You can calculate with me;) I'm the freshest study budy you could look for.",
#     language: 'German, English, French',
#     maxGroupSize: 4,
#     searchesForMensa: false,
#     searchesForStudy: true,
#     image: '/static/tumStudent1.jpg'

class Profile(Base):
    __tablename__ = 'profile'
    id  = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    age = Column(Integer)
    degree = Column(String)
    description = Column(String)
    semester = Column(String)
    maxGroupSize = Column(Integer)
    image =  Column(String)
    searchesForMensa = Column(Boolean, unique=False, default=False)
    searchesForStudy = Column(Boolean, unique=False, default=False)

    time_created = Column(DateTime(timezone=True), server_default=func.now())
    time_updated = Column(DateTime(timezone=True), onupdate=func.now())
    # author_id = Column(Integer, ForeignKey('author.id')) BIND MATCHES

    # author = relationship('Match')


class Match(Base):
    __tablename__ = 'match'
    id = Column(Integer, primary_key=True)
    # list of ids? https://docs.sqlalchemy.org/en/14/core/type_basics.html#sqlalchemy.types.ARRAY
    # matches = Column(Integer, ARRAY(Integer))

    time_created = Column(DateTime(timezone=True), server_default=func.now())
    time_updated = Column(DateTime(timezone=True), onupdate=func.now())

