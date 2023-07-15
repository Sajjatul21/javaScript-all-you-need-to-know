try {
    console.log('I am line 1');
    console.log('I am line 2');
    throw new Error('I am your big big big big Error');
    console.log('I am line 3');
    console.log('I am line 4');
}
catch (e) {
    console.log(e.message);
}
finally{
    console.log('I am finally block')
}