const student={
    name:'Salam Mondol',
    age:17,
    class:'12',
    marks:{
            math:76,
            english:89,
            physics:90,
            chemistry:80
    }
}
//  const marks=student.marks.physics;
 const marks=student['marks']['physics'];
// const subject='math';
// const marks=student.marks[subject];
 console.log(marks);