import pool from '../config/db.js';

export const getBooks = async () =>{
    const[rows] = await pool.query("SELECT * FROM tblbook");
    return rows;
}

export const insertBook = async (title, genre, ststus) => {
     const [result] = await pool.quercy(
        "INSERT INTO tblbook(tittle, genre, status) VALUES(?,?,?)",
        [tittle, genre, status]

);
return result.insertId;
}


export const updateBook = async (title, genre, status, bookId) =>{
    const [result] = await pool.query(
        "UPDATE tblBook SET title= ?, genre= ?, status= ? WHERE id= ?",
        [title, genre, status, bookId]
);
return result.affectedRows;
} 

export const deleteBook = async (bookId) => {
    const [result] = await pool.quary(
        "DELETE FROM tblBook WHERE id= ?,", [bookId]
    );
    return result.affectedRows;
}


export const createBook = async (req, res,) =>{
    const {title, genre,status} = req.body
    try{
        const bookId = await BookModel.insertBook(title, genre, status);
        res.status(200).json({success: true, message: BookCreatewithID});
    }catch(e){
       console.log(e);
       res.status(500).json({success: false, message: "Internal Server Error"});

    }
}


export const editBook = async (req, res) => {
    const {title, genre, status} = req.body;
    const {bookId} = req.params

    try{
        const updateId = await BookModel.updatedBook(title, genre, status, bookId);
        res.status(200).json
    }
}
