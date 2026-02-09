import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    foodTags : {
        type : String,
    },
    catagory : {
        type : String 
    },
    code : {
        type : String,
    },
    isAvailable : {
        type : Boolean,
        default : true
    },
    restaurant : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Restaurant'
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    imageUrl : {
        type : String,
        default : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmAMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABQEDBAYCB//EADoQAQACAQICBQcICwAAAAAAAAABAgMEERIhBRMxQdE0UWFxkaGxIlJTcoGSk8EUFSMkQkSCg6Lh8P/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A/cQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARtflyRrcsVy5K1iKxw1ttH/c2Op1/d1325f9sa3y/N9anwhaURJ02vntjN+NPiz+ia6fpY/vz4rYUR66PWbc5yfjz4vv9E1vdk2j057eDdn6QimW1MdOPhna0zO0ep0aTUV1OObViYmJ2tWe2JQSM05sV7VvlzVvWYnfrN9+a7CLr/LM39NfdHitgAAAAAAAAAAAAja2I/WUx862Pf7Z2d2s11dPMVik5Lzz4YnbaHB0jxV117024qxSY37OU7tEb3ta+Sd7WneZUXMGemoxxfHO8T7YnzS2oWHNfT5ePHPLstWeyYWNPnpnpxUn0TE9sSgkajDlw5r8WO9q2va0TSk27Zme71uzorFkp1uXJWaxfaK1nt5b8/f7nfyOUAi67yzN9enwqtout8szem9PhVaAAAAAAAAAAAABH1+063JE/Nr+bmtO23c39Iz++5PPw1aZjihpGOKJ7ObOHPfHk3x8rxG3PsmPNLXasRPmZiJmP4diChm6TngrGCn7Tbnxxyr4tOPpTPS0TnrS9O/q6zEx753c8RtHnfFuKZ5QQdWpvXJreKlomtppMTCzDzuOkUms1iK73iZ9r0aaoAgAAAAAAAAAAma/SZsup6zFStqzWIn5W0tEaPU9+GfvV8VoBCnR595309vbE/mW0up22pgv7Y8V0Wjz8aXWx/L2+9XxfddNrfof8o8V0KIkaTVTasTgmPlRz4q7dvrWwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z"
    },
    rating : {
        type : Number
    }
}, {timestamps : true})

const Food = mongoose.model("Food", foodSchema)

export { Food }