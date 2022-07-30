const leapYears = function(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  //1997        False    AND       True         OR          False
  //              |----- FALSE -----|                         |      
  //                       |----------------- FALSE ----------|
  //Therefor, 1997 is not a leap year  
  
  
  //2024         True    AND       True                     False
  //              |----- TRUE ------|                         |    
  //                      |------------------ TRUE -----------|
  //Therefor, 2024 is a leap year
};                                                          

// Do not edit below this line
module.exports = leapYears;
