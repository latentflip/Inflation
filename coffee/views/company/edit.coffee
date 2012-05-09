Inflation.Views.Company ||= {}

class Inflation.Views.Company.Edit extends Backbone.View
  template: JST['templates/company/edit']

  render: =>
    $(@el).html @template(@options.model.toJSON())
    @

