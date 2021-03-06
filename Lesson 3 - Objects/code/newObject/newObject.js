(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject(constructor) {
        var OBJ = Object.create(constructor.prototype);
        var ARR = new Array();
        for(var a=1;a<arguments.length;a++){
            ARR.push(arguments[a]);
            
        }
     
        if(constructor.apply(OBJ,ARR)!=null)
        OBJ = constructor.apply(OBJ,ARR);
        return OBJ;
        
        
        
    }

	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/


