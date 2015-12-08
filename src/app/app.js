$(function(){
	
	console.time('all');
	
	var buttongroup1 = jsCow.get(jsCow.res.components.buttongroup).add([
		jsCow.get(jsCow.res.components.button, {
			text: 'Button'
		}),
		jsCow.get(jsCow.res.components.button, {
			text: 'Button'
		}),
		jsCow.get(jsCow.res.components.button, {
			text: 'Button'
		})
	]);

	var buttongroup2 = jsCow.get(jsCow.res.components.buttongroup).add([
		jsCow.get(jsCow.res.components.button, {
			text: 'Button'
		}),
		jsCow.get(jsCow.res.components.button, {
			text: 'Button'
		})
	]);
	
	buttongroup1.run();
	buttongroup2.run();
	
	console.timeEnd('all');
	console.log(jsCow.componentsObjectList.length, "components created...");
	
});
