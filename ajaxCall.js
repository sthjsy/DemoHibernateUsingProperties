$(document).ready(function()
        {
           $('#bttHello').click(function ()
           {
             var firstName=$('#firstName').val;
             $.ajax(
                     {
                         type: 'POST',
                         data:{firstName: firstName},
                         url: Test,
                         success: function (result)
                         {
                             $('#result1').html(result);
                         }
                     });
           });
        });
