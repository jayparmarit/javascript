// $("document").ready(()=>{
//     $("#btn").click(()=>{
//         $("#img").css({
//             width : "600px",
//             height : "600px",
//         });
//     });
// });

//  using different method

// double click

// $("document").ready(()=>{
//     $("#btn").dblclick(()=>{
//         $("#img").css({
//             width : "600px",
//             height : "600px",
//         });
//     });
// });


// mouse event

// $("document").ready(()=>{
//     $("#btn").mouseleave(()=>{
//         $("#img").css({
//             width : "600px",
//             height : "600px",
//         });
//     });
// });

// $("document").ready(()=>{
//     $("#btn").mouseenter(()=>{
//         $("#img").css({
//             width : "600px",
//             height : "600px",
//         });
//     });
// });


$("document").ready(() => {
  $("#btn").keyup(() => {
    $("#img").css({
      width: "600px",
      height: "600px",
    });
  });
});

// $("document").ready(() => {
//   $("#btn").keydown(() => {
//     $("#img").css({
//       width: "600px",
//       height: "600px",
//     });
//   });
// });