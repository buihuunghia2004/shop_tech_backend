module.exports = {
  async up(db, client) {
    //categories
    const categories = require('./data/categories.data')
    await db.collection('categories').insertMany(categories)

    //smart phone brands
    let smartPhoneBrands = require('./data/smart-phone/brand.data')
    smartPhoneBrands = smartPhoneBrands.map((item) => {
      return {
        ...item,
        category:categories[0]._id
      }
    })
    await db.collection('brands').insertMany(smartPhoneBrands)
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
