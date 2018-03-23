export function deleteEmptyKeys(object) {

    let objectCopy = Object.assign({}, object)

    Object.keys(objectCopy).forEach((key) => {

        if(!objectCopy[key]) {
            delete objectCopy[key]
        }

    })

    return objectCopy

}


// export
export default {
    deleteEmptyKeys,
}
