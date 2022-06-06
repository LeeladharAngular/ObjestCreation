let greeting = ( function() {
    let message={
        firstName:'leeladhar',
        lastName:'pallela',
        fullName:'leeladharpallela'};
    let getMessage = function() {
            return message;
    };
        
        return{

         getMessage : getMessage,
    };
})();
console.log(greeting.getMessage());