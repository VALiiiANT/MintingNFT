/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// a variable to hold all NFT's
const NFTs=[]

// function will taking in some values as parameters, to create an
// NFT object using the parameters passed as its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyeColor, _shirtType, _bling) {
    const NFT={
        "Name": _name,
        "EyeColor": _eyeColor,
        "ShirtType": _shirtType,
        "Bling": _bling
    }

    NFTs.push(NFT);
    console.log("Minted:" + _name);
}

// to get the metadata of all the NFTs created
// we iterate over all of them using for loop
function listNFTs () {
    for(let i=0; i<NFTs.length; i++){
        console.log("\nID: \t\t" + (i+1));
        console.log("Name: \t\t" + NFTs[i].Name);
        console.log("EyeColor: \t" + NFTs[i].EyeColor);
        console.log("ShirtType: \t" + NFTs[i].ShirtType);
        console.log("Bling: \t\t" + NFTs[i].Bling);
    }
}

// getting the total number of NFTs we have minted so far
function getTotalSupply() {
    console.log("\nTotal Number of NFTs minted: " + NFTs.length);
}

// function calls
mintNFT("Azuki", "Blue", "Polo", "Goggles");
mintNFT("Mindy", "Hazel", "Tunic", "Fire");
mintNFT("Punk", "Amber", "Hoodie", "SlingShot");
mintNFT("Rodeo", "Green", "Tank", "Pistols");
mintNFT("Doodle", "Grey", "Frock", "Crayons");
listNFTs();
getTotalSupply();
