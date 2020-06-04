$(function () {
  var fileName = "Resume_Marc_Arguijo.pdf";
  $("#btnShowResume").click(function () {
    $("#dialog").dialog({
      modal: true,
      title: fileName,
      width: 540,
      height: 450,
      buttons: {
        Close: function () {
          $(this).dialog("close");
        },
      },
      open: function () {
        var object = `<object data=\"${FileName}\" type=\"application/pdf\" width=\"500px\" height=\"300px\">`;
        object +=
          'If you are unable to view file, you can download from <a href = https://github.com/On-Your-Marc-GO/Personal-Portfolio-Marc-Arguijo/raw/master/assets/files/Resume_Marc_Arguijo.pdf">here</a>';
        object += ` or download <a target = "_blank" href = "http://get.adobe.com/reader/">Adobe PDF Reader</a> to view the file.`;
        object += `</object>`;
        object = object.replace(/{FileName}/g, "../Files/" + fileName);
        $("#dialog").html(object);
      },
    });
  });
});
