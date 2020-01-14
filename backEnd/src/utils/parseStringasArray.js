module.exports = function parseStringasAsrray(arrayasString){

   return  arrayasString.split(',').map(tech => tech.trim())

}