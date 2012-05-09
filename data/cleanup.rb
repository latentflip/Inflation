require 'csv'
require 'active_support/all'
require 'json'

rates = {}
CSV.foreach('./inflationmonthly.csv', :headers => true) do |r|
  date = Date.parse("01-#{r["Date"]}")
  rpi = r["RPI, % change over 12 months"]
  cpi = r["CPI, % change over 12 months"]
  monthly_cpi = r["Month on Month"]

  rates[date] = {:monthly_cpi => monthly_cpi}
end

File.open('inflation_data.js', 'w+') do |f|
  f.write('Inflation.Data.monthlyCPI = ')
  f.write rates.to_json
  f.write ';'
end

puts rates.to_json


__END__
price = 1k000.0
monthly_days = 20
start_date = Date.parse('01 March 2009')

### app
#
date = start_date
price_should_be = price
lost_so_far = 0.0

while (date <= Date.today)
  date += 1.year

  rate = rates[date] or break
  price_should_be = price_should_be * (1 + (rate[:cpi].to_f/100))

  made = monthly_days * price * 12
  should_have_made = monthly_days * price_should_be * 12
  lost_so_far = should_have_made - made

  puts "#{date}: #{lost_so_far}, #{price}, #{price_should_be}"

end
