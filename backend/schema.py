# build a schema using pydantic
from pydantic import BaseModel

# https://pydantic-docs.helpmanual.io/usage/types/

class Profile(BaseModel):
    title: str
    rating: int
    author_id: int

    name = str
    age = int
    degree = str
    description = str
    semester = str
    maxGroupSize = int
    image =  str
    searchesForMensa = bool
    searchesForStudy = bool

    class Config:
        orm_mode = True

class Matches(BaseModel):
    name:str
    age:int

    class Config:
        orm_mode = True
        