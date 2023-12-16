list = []

with open("city_coordinates.csv" , 'r') as file:
    file_content = file.read()
    list = file_content.split("\n")

list.pop(0)

with open("city_coordinates.json", 'w') as file:
    file.write('[')
    for item in list:
        record = item.split(",")
        lat = record[0]
        lon = record[1]
        city = record[2]
        country = "N/A" if len(record) < 4 else record[3]
        countryRecord = "{" + " \"lat\": {}, \"lon\": {}, \"city\": \"{}\", \"country\": \"{}\"".format(lat, lon, city, country) + "},\n"
        file.write(countryRecord)
    file.write(']')    