
function broadcast(componentName ,eventName ,params){
	this.$children.forEach( child => {
		const name = child.$options.name ;
		
		if(name === componentName){
			child.$emit.apply(child, [eventName].concat(params));
			
		}else{
			broadcast.apply(child,[componentName,eventName].concat([params]))
		}
		
	})
}

/**
 * 这两个方法都接收了三个参数，
 * 第一个是组件的 name 值，
 * 用于向上或向下递归遍历来寻找对应的组件，
 * 第二个和第三个就是上文分析的自定义事件名称和要传递的数据。
 */
export default {
	methods: {
		dispatch(componentName ,eventName ,params){
			let parent = this.$parent || this.$root ;
			let name = parent.$options.name ;
			
			while(parent && (!name || name !== componentName)){
				parent = parent.$parent ;
				if(parent){
					name = parent.$options.name ;
				}
			}
			if(parent){
				parent.$emit.apply(parent, [eventName].concat(params)) ;
			}
		},
		broadcast(componentName ,eventName ,params){
			broadcast.call(this,componentName ,eventName ,params)
		}
			
	}
}



