
export const message = (message) => {
    const count = message.toString().length;
    const separator = '-'.repeat(count + 3);

    console.log(`\n ${separator} \n ${message} \n ${separator} \n`)
}