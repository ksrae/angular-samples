export function Log(isLog: boolean) {
	return (target: any, propName: string, description: PropertyDescriptor) => {
    console.log({target}, {propName}, {description});
    const val: string = description.value.toString();
    for(let item in target) {
      console.log('1', item);
    }


    return description;
	}
}
