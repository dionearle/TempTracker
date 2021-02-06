// Continually tracks the max, min, and avg temperature as new numbers are inserted.
class TempTracker {

    // NOTE: I decided that if a getter method is called before a temperature
    // has been inserted, it should simply return undefined.

    // The highest temperature seen so far.
    #max;

    // The lowest temperature seen so far.
    #min;

    // The number of temperatures seen so far.
    #seen = 0;

    // The sum of all temperatures seen so far.
    #sum;

    // The average of all temperatures seen so far.
    // NOTE: Alternatively this field could have been removed and the getter for the
    // average temperature could have calculated the average itself using sum / seen, 
    // yet I wanted the getters to be as efficient as possible.
    #avg;

    // A method to insert a new temperature.
    insert(temp) {

        // To begin, an initial check is done to ensure the temperature given is
        // in the correct format (being a number). 
        if (typeof temp !== "number") {
            // NOTE: I decided that if an invalid input was given, an error messsage
            // should be logged and the method should return.
            console.error("Temperature '" + temp + "' is not a valid number.");
            return;
        }

        // Next, the counter for the number of temperatures seen is incremented.
        this.#seen += 1;

        // If this is the first temperature seen, then the max, min, total sum
        // and average temperature will all simply equal the temperature value.
        if (this.#seen == 1) {
            this.#max = this.#min = this.#sum = this.#avg = temp;
        } else {

            // Given this isn't the first temperature seen, we need to compare it
            // to the existing highest temperature to see if it is larger, if so
            // updating the max.
            if (temp > this.#max) {
                this.#max = temp;
            }

            // The temperature is also compared against the existing lowest temp,
            // being updated if it's lower.
            if (temp < this.#min) {
                this.#min = temp;
            }

            // Finally, to update the average of all temperatures seen, the current
            // temperature value is first added to the total sum, and then this sum is
            // divided by the number of temperatures seen.
            this.#sum += temp;
            this.#avg = this.#sum / this.#seen;
        }
    }

    // A method to get the highest temperature we’ve seen so far.
    get max() {
        return this.#max;
    }

    // A method to get the lowest temperature we’ve seen so far.
    get min() {
        return this.#min;
    }

    // A method to get the average of all temps we've seen so far.
    get avg() {
        return this.#avg;
    }
}