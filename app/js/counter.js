$(document).ready(function () {



  $('.counter-js').each(function (index) {
    let $this = $(this);
    let $inputVal = $this.find('input').val();
   
    
    if ($inputVal == 1) {
      $this.find('.minus').hide();
      $this.find('.counter__trash').css('display', 'flex');
    }
    
    $this.find('.minus').on('click', function () {
      let $inputVal = $this.find('input').val();
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      
      if ($inputVal <= 2) {
        $this.find('.minus').hide();
        $this.find('.counter__trash').css('display', 'flex');
      }
      return false;
      
    });
    $this.find('.plus').on('click', function () {
      let $inputVal = $this.find('input').val();
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      if ($inputVal >= 1) {
        $this.find('.minus').show();
        $this.find('.counter__trash').hide();
      }
      return false;
    });
  });

});