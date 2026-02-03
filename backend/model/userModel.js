const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
        required : true,
    },
    userType : {
        type : String,
        required : true,
        enum : ["client", "admin", "driver", "vendor"],
        default : "client"
    },
    profileUrl : {
        type : String,
        default : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAQlBMVEX6+vqPj4////+KioqxsbGGhoaWlpb39/fx8fG7u7vo6Oienp7s7OyDg4PExMSampqqqqrU1NTb29vLy8vi4uKkpKSF/ZZuAAADGElEQVR4nO2b23LjIAxAjTAGbEN8/f9fLU7aTS+xDUmQ2Bmdp7bThzMCZCzJVcUwDMMwDMMwDMMwDMN8AneoVf4C2iyzHbquW+28mKosRTDz0CglpRBCSqWaejTlGEJvxVXtTvjVFmIIxqqfcl+KvgRDGJtHdlfDy0QvaN2O3YbzxHYw7AXvM4Q1aQR1d6wXBAdKv5PoXQUtmR3Ycz0h1Ey0xDAdHY07bqERNF2UnhCrptADqyL9nKcIoI5b3Q1J4Bd3OG4oggCaJlpPiA59B8IYH74A/oO4TvGTFttPX1LCJ1dkvaqPP71XQYOrF/vs+MK1uAsMc2xyvqFGZL+E7Hf1Q74kQNLxDfsPOUMX75e6vth+vvDzMSbmF+Q7KhSenyudpEdwgUm8H2DrwZzkh3w8Am3K/bTB3n5pGRr/+hf82vgT7PDDd14aog1foI0NH8Hu24h9xtEVYNaYFSYsAZpLRH0N/9HxD+hPBYMeYQUV2t3i+JcebQ0f+sM9KAfK6F0Fq/2btCRKfL9Ymod5RqoO+aV3B4Bxlb+DKOU6FtPHBD3Vyt2jqJy0E/XO+wEALH7oLhvd4NsCe8CbkjbG6DIb1AyDArxCfr1+8vWz+CnzbWGbhHBKPotyTdaZBJhEWlntwVNZ5Hsopxaddwxz9WqgfzV4n2RaYkipaBwguyx+iR23I8EsxcrUkviBX5ZrdXQ7/9xvyPHK2b9p+wW6HAUP9mO/SNYcfqWfXx1dLz31qzPoFZ+f0zoeh35ZuiHQvs0vT8US3nRA5JDpfjWn9Sz3cLkuqPotGVBmGwd8zwnJ2StMGmra0Vvz6UH7+gtS1k566ljEXzI3k+KHTnf0ss+Z1K8IKoSCfuJkznckxucCIcs8ZygFzhQCLCdNrR09tHYIgE02VA3mBBb0tUuaL3HYXyOBDjGMU5Ty4gmaNWDGQZ5GMfxHnbtqumtY6WloxFYZfRi28NdLPWnKb/UAoB19vTZSOadulV+1/SiatfZjCX2uW1+rX6Zx9nbD+3FZehPiRu72DfRGAsMwDMMwDMMwDMMwzP/BBwMuI8sG9z5KAAAAAElFTkSuQmCC"
    }
}, {
    timestamps : true,
})

const User = mongoose.model("User", userSchema)

module.exports = {User}