//if statement
/*
let height = 9
if( height < 10){
    console.log("okay")
}

// else statement
let growth = 0.2
if(growth < 0.2){
    console.log("low")

}else{
    console.log("normal")
}

//else if statement
let firstAttempt = 30
if(firstAttempt<10){
    console.log("okay")
}else if(firstAttempt<=20){
console.log("nice")
}else{
    console.log("welldone")
}*/

/*const hour =15
            const name = "praise"
            if (hour >= 6 && hour <= 12){
               console.log (`Goodmorning ${name}`)
            } else if(hour >= 13 && hour <= 17){
                console.log(`Goodafternoon ${name}`)

            }else{
                console.log(`Goodnight ${name}`)
            }
                const age = 6
                const isHoliday = true
                if( (age <= 6 ||age >= 65) && !isHoliday){
                    console.log("discount")

                }else{
                    console.log("No discount")
                }*/

                   const randomNumber = Math.random()
                   let results = randomNumber
                   const guess="heads"

                    if(randomNumber<0.5){
                        console.log("you win")

                    }else{
                        console.log("you lose")

                    }

                    let hour = 13
                     let greeting = hour >= 6 && hour <= 12?"goodmorning":"goodafternoon"
                     console.log(greeting)

                     
       function convertToFahrenheit(celsius){
        return (celsius*9/5)+32
      }
      convertToFahrenheit(25);

      function convertToCelsius(fahrenheit){
        return(fahrenheit-32)*5/9
      };
      convertToCelsius(86)

      function convertTemperature(degrees,unit){
        if(unit==="c"){
          const result =convertToFahrenheit(degrees);
          return `${result}f`
        }else if(unit==="f"){
          const result = convertToCelsius(degrees);
          return `${result}c`
        } 
      };
      console.log(convertTemperature(25,"c"))
       console.log(convertTemperature(86,"f"))
       

//swtich statement
let favFood = " fried rice"
switch(favFood){
    case "eba": 
        console.log(`That's right my ${favFood}`)
        break;

        case "yam": 
        console.log(`That's right my ${favFood}`)
        break;

        case "fried rice": 
        console.log(`That's right my ${favFood}`)
        break;

        case "garri":
        console.log(`That's right my ${favFood}`)
        break;

        case "beans": 
        console.log(`that's right my ${favFood}`)
        break;

        default: 
        console.log(`${favFood} not found...I'm hungry`)
};
      
//error handling
try{
   console.log(hm)
}catch(error){
   console.log("checking:"+ error.message)
}finally{
    console.log("texting microphone")};

    let age = 9;
   let option = age === 9 ? "child" : "not in the list"
   console.log(option)

   const num = + "5"
   console.log(num,typeof num)

   let num1= 20
   num1++
   console.log(num1);