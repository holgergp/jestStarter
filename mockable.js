export function objectCaller(toBeCalled) {
    toBeCalled.fire('1');
    toBeCalled.fire('2');
    toBeCalled.fire('3');
}

export function objectCallerAndReturner(toBeCalled) {
   return toBeCalled.trigger('1');
}