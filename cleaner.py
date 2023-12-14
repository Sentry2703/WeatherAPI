list = []

with open('city_coordinates_cleaned.csv', 'r') as file:
    file_content = file.read()
    list = file_content.split("\n")

with open('city_coordinates_cleaned.csv', 'w') as file:
    for item in list:
        file.write('"' + item + '",\n')
    