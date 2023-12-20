// // hover 

// $('.h-main').each(function (index) {
//   let id = $(this).find('.icon svg use').attr('xlink:href')
//   let stroke = $(`${id}`).find('path').attr('stroke');
//   let fill = $(`${id}`).find('path').attr('fill');
//   $(this).on('mouseenter', function () {
    

//     // $(this).find('.icon svg path').each(function () {
//     $(`${id}`).find('path').each(function () {
      
//       if ($(this).attr('stroke')) {
//         $(this).attr('stroke', '#ED1C24')
//       } else {
//         $(this).attr('fill', '#ED1C24')
//       }
//     })


//   });
//   $(this).on('mouseleave', function () {
//     // $(this).find('.icon svg path').each(function () {
//     $(`${id}`).find('path').each(function () {
//       if ($(this).attr('stroke')) {
//         $(this).attr('stroke', stroke)
//       } else {
//         $(this).attr('fill', fill)
//       }
//     })
//   });

// });

