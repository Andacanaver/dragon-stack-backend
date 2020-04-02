const pool = require('../../databasePool');

class GenerationTable {
    static storeGeneration(generation) {
        return new Promise((res, reject) => {
            pool.query(
                'INSERT INTO generation(expiration) VALUES($1) RETURNING id',
                [generation.expiration],
                (err, response) => {
                    if (err) return reject(err);

                    const generationId = response.rows[0].id;

                    res({ generationId });                }  
            );
        })
        
    }
}

module.exports = GenerationTable