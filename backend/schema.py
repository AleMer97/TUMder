# build a schema using pydantic
from pydantic import BaseModel

# https://pydantic-docs.helpmanual.io/usage/types/

class Profile(BaseModel):
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
   

    class Config:
        orm_mode = True
        