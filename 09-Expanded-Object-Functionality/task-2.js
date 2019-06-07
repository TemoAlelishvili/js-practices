Object.prototype.mergeDeepRight = function(object) {
    addingToFunction(this, object);
 
    function addingToFunction(param1, param2){
        let keys = Object.keys(param2);
        keys.forEach(function(key){
            param1[key] = param2[key];
            if(typeof param2[key] === 'object' && !Array.isArray(param2[key])){
                addingToFunction(param1[key], param2[key]);
           }  else if (Array.isArray(param2[key])){
                param1[key].push(...param2[key]);
            }
       });
    }
 };
 
 Object.defineProperty(Object.prototype, 'mergeDeepRight', {enumerable: false} );
 
 const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
 };
 
 data.mergeDeepRight({
        age: 40,
        contact: {
            email: 'baa@example.com',
            favorite: true,
            meta: {
                tags: ['vip'],
             
            }
        },
    nope: {
        value: 'nope'
        }
    });
 console.log(JSON.stringify);