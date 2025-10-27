const { expect } = require('chai');

Feature('Products API');

Scenario('Get all products', async ({ I }) => {
    const res = await I.sendGetRequest('/products');
    expect(res.status).to.equal(200);
    expect(res.data.total).to.equal(194);
});

Scenario('Get a single product', async ({ I }) => {
    const res = await I.sendGetRequest('/products/1');
    expect(res.status).to.equal(200);
    expect(res.data.id).to.equal(1);
    expect(res.data.title).to.equal('Essence Mascara Lash Princess');
});

Scenario('Add a new product', async ({ I }) => {
    const res = await I.sendPostRequest('/products/add', {
        title: 'BMW Pencil',
        price: 199
    });
    expect(res.status).to.equal(201);
    expect(res.data.title).to.equal('BMW Pencil');
});

Scenario('Update a product', async ({ I }) => {
    const res = await I.sendPutRequest('/products/1', {
        title: 'iPhone 9s'
    });
    expect(res.status).to.equal(200);
    expect(res.data.title).to.equal('iPhone 9s');
});

Scenario('Delete a product', async ({ I }) => {
    const res = await I.sendDeleteRequest('/products/1');
    expect(res.status).to.equal(200);
    expect(res.data.isDeleted).to.be.true;
});
