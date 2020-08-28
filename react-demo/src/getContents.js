const paths = {
    root : {
        type:"dir",
        children:{
            home:{
                type:"dir",
                children:{
                    myname:{
                        type:"dir",
                        children:{
                            "filea.txt":{
                                type:"file"
                            },
                            "fileb.txt":{
                                type:"file"
                            },
                            projects:{
                                type:"dir",
                                children:{
                                    mysupersecretproject:{
                                        type:"dir",
                                        children:{
                                            mysupersecretfile:{
                                                type:"file"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

function searchPath(path, start) {
    if (start[path]) {
        if (start[path].type === 'dir') {
            const children = [];
            for (let key in start[path].children) {
                children.push({
                    name: key,
                    type: start[path].children[key].type
                });
            }
            return {
                name: path,
                type: start[path].type,
                children
            }
        } else if (start[path].type === 'file') {
            return {
                name: path,
                type: start[path].type,
            }
        }
    } else {
        for (let key in start) {
            if (start[key].type === 'dir') {
                return searchPath(path, start[key].children);
            }
        }
    }
}

let getContents = async function(path) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(searchPath(path, paths))
        }, 300)
    });
}

export default getContents;