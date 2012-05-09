Inflation.App =
  init: ->
    company = new Inflation.Models.Company()
    editView = new Inflation.Views.Company.Edit(model: company)
    editView.render()
    $('#inflationApp').append editView.el




