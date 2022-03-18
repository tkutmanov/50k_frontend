(function(){
    'use strict';

    class user{

        constructor(name,surname,year){
            this.name=name;
            this.surname=surname;
            this.year=year;


            }

            getFullName() {
                console.log(this.name+" "+this.surname);
        }
    }
  

    class student extends user{

        constructor(name,surname,year,thisYear){
            super(name,surname,year); 
            this.thisYear=thisYear;

        }
            getCourse(){
                let course = this.thisYear-this.year;
                console.log(`ФИО: ${this.name} ${this.surname}, текущий курс студента: ${course}`);

        }
    }

    const infoStudent = new student("Meerim", "Aidaralieva", 2019, 2022);

    infoStudent.getCourse();

   








}());