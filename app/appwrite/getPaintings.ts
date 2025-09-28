import {client, account, database, storage, appwriteConfig} from "./client"
import { Query } from "appwrite"

export const getAbstractImgs = async () => {
    const {documents} = await database.listDocuments(
        appwriteConfig.databaseID, 
        appwriteConfig.paintingsCollectionID, 
        [
            Query.equal("style", ["Abstract"]),
        ]
    )

    return documents;
}

export const getCubismImgs = async () => {
    const { documents } = await database.listDocuments(
        appwriteConfig.databaseID, 
        appwriteConfig.paintingsCollectionID, 
        [
            Query.equal("style", ["Cubism"])
        ]
    )

    return documents
}

export const getPortraitImgs = async () => {
    const { documents } = await database.listDocuments(
        appwriteConfig.databaseID, 
        appwriteConfig.paintingsCollectionID, 
        [
            Query.equal("style", ["Portrait"])
        ]
    )

    return documents
}

export const getRealismImgs = async () => {
    const { documents } = await database.listDocuments(
        appwriteConfig.databaseID, 
        appwriteConfig.paintingsCollectionID, 
        [
            Query.equal("style", ["Realism"])
        ]
    )

    return documents
}

export const getSurrealismImgs = async () => {
    const { documents } = await database.listDocuments(
        appwriteConfig.databaseID, 
        appwriteConfig.paintingsCollectionID, 
        [
            Query.equal("style", ["Surrealism"])
        ]
    )

    return documents
}