'use strict';

(function() {

  //清除多余生成的.ui.modal，仅保留最后生成的modal
  var modals = $('.ui.modal');
  for (var i = 1, len = modals.length; i < len; i++) {
    $(modals[i]).remove();
  }

  $('.ui.modal')
    .modal({
      inverted: true
    })
  ;

  $('.ui.modal.pay')
    .modal('attach events', '.button.pay', 'toggle')
  ;

  $('.ui.dropdown')
    .dropdown()
  ;

  $('.ui.corner.label.login-switch')
  .popup({
    title: '二维码付款',
    content: '尚在开发中，敬请期待',
    on    : 'hover'
  })
  ;

  $('.first .master.checkbox')
  .checkbox({
    // check all children
    onChecked: function() {
      var
        $childCheckbox  = $('tr.list').find('.checkbox.child')
      ;
      $childCheckbox.checkbox('check');
    },
    // uncheck all children
    onUnchecked: function() {
      var
        $childCheckbox  = $('tr.list').find('.checkbox.child')
      ;
      $childCheckbox.checkbox('uncheck');
    }
  })
;

// $('tr.list .checkbox.child')
//   .checkbox({
//     // Fire on load to set parent value
//     fireOnInit : true,
//     // Change parent state on each child checkbox change
//     onChange   : function() {
//       var
//         $parentCheckbox = $('.first .master.checkbox'),
//         $checkbox       = $('tr.list .checkbox.child'),
//         allChecked      = true,
//         allUnchecked    = true
//       ;
//       // check to see if all other siblings are checked or unchecked
//       $checkbox.each(function() {
//         if( $(this).checkbox('is checked') ) {
//           allUnchecked = false;
//         }
//         else {
//           allChecked = false;
//         }
//       });
//       // set parent checkbox state, but dont trigger its onChange callback
//       if(allChecked) {
//         $parentCheckbox.checkbox('set checked');
//       }
//       else if(allUnchecked) {
//         $parentCheckbox.checkbox('set unchecked');
//       }
//       else {
//         $parentCheckbox.checkbox('set indeterminate');
//       }
//     }
//   })
// ;

})();
