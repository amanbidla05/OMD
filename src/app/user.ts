enum  Genders {
    male  =  " male " ,
    female  =  " female "
  }
  
  export  class  User {
    id :  string  |  number ;
    index :  number ;
    guid :  string ;
    isActive :  boolean  =  false ;
    picture :  string ;
    age :  number ;
    name :  string ;
    gender :  Genders ;
    company :  string ;
    email :  string ;
    phone :  string ;
  }