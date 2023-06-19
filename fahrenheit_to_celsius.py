FREEZING_ZERO = 32

# Define the converter function
def fahrenheit_to_celsius(temp_f):
  return round((temp_f - FREEZING_ZERO) * 5/9, 2)

# Collect the user's input to be converted
user_query = int(float(input("Enter the temperature in Fahrenheit: ")))
print(f"You entered: {user_query} F")

# Convert the user's input and print the result
user_answer = str(fahrenheit_to_celsius(user_query))
print(f"{user_query} degrees Fahrenheit is {user_answer} degrees Celsius.")
