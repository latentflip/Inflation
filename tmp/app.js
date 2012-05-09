
Inflation.App = {
  init: function() {
    var company, editView;
    company = new Inflation.Models.Company();
    editView = new Inflation.Views.Company.Edit({
      model: company
    });
    editView.render();
    return $('#inflationApp').append(editView.el);
  }
};
