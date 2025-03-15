/// <reference types="Cypress" />


describe ('Test website saucedemo', () => {

    beforeEach ('Test Login', ()=>{
        cy.visit('https://www.saucedemo.com/')  //akses website yang akan diuji
        cy.get('[data-test="username"]').type('standard_user')  //pilih field username lalu isi dengan username yang benar
        cy.get('[data-test="password"]').type('secret_sauce')   //pilih field password lalu isi dengan password yang benar
        cy.get('[data-test="login-button"]').click()    // pilih dan klik button login
        cy.get('[data-test="title"]').should('be.visible')  //verifikasi element judul produk yang ada dihalaman 'Produk' sudah tampil atau terlihat
        cy.get('[data-test="title"]').should('contain','Product')   //verifikasi judul yang ada pada element tersebut terdapat kata 'Product'
    })

    it ('Test Buy 2 Product Until Finish', ()=> {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()     //tambahkan produk sauce-labs-backpack ke dalam keranjang
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()   //tambahkan produk sauce-labs-bike-light ke dalam keranjang
        cy.get('[data-test="shopping-cart-link"]').click()      //pilih dan klik icon keranjang
        cy.get('[data-test="title"]').should('be.visible').should('contain','Your Cart')    //verifikasi judul yang ada pada element tersebut sudah tampil atau terlihat dan terdapat kata 'Your Cart'
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('be.visible').should('contain','Sauce Labs Backpack')      //verifikasi nama yang ada pada element tersebut sudah tampil atau terlihat dan terdapat kata 'Sauce Labs Backpack'
        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should('be.visible').should('contain','Sauce Labs Bike Light')    //verifikasi nama yang ada pada element tersebut sudah tampil atau terlihat dan terdapat kata 'Sauce Labs Bike Light'
        cy.get('[data-test="checkout"]').click()    // pilih dan klik button checkout
        
        cy.get('[data-test="firstName"]').type('Belajar')   //pilih field firstname lalu isi dengan nama pembeli
        cy.get('[data-test="lastName"]').type('Cypress')    //pilih field lastname lalu isi dengan nama pembeli
        cy.get('[data-test="postalCode"]').type('0123456789')   //pilih field postal code lalu isi dengan kode pos pembeli
        cy.get('[data-test="continue"]').click()    // pilih dan klik button continue
        cy.wait(4000)   // tunggu hingga 4 detik

        cy.get('[data-test="title"]').should('be.visible').should('contain','Checkout: Overview')   //verifikasi nama yang ada pada element tersebut sudah tampil atau terlihat dan terdapat kata 'Checkout: Overview'
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('be.visible').should('contain','Sauce Labs Backpack')      //verifikasi nama yang ada pada element tersebut sudah tampil atau terlihat dan terdapat kata 'Sauce Labs Backpack'
        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should('be.visible').should('contain','Sauce Labs Bike Light')    //verifikasi nama yang ada pada element tersebut sudah tampil atau terlihat dan terdapat kata 'Sauce Labs Bike Light'
        cy.get('[data-test="finish"]').scrollIntoView().should('be.visible')    //lakukan scroll hinggal elemen yang ditentukan dan verifikasi nama yang ada pada element tersebut sudah tampil atau terlihat
        cy.get('[data-test="finish"]').click()  // pilih dan klik button finish
        cy.wait(4000)   // tunggu hingga 4 detik

        cy.get('[data-test="complete-header"]').should('be.visible').should('contain','Thank you for your order!') //verifikasi nama yang ada pada element tersebut sudah tampil atau terlihat dan terdapat kata 'Thank you for your order!'
        cy.wait(4000)   // tunggu hingga 4 detik
        cy.get('[data-test="back-to-products"]').click() // pilih dan klik button finish
        cy.get('[data-test="title"]').should('be.visible')  //verifikasi element judul produk yang ada dihalaman 'Produk' sudah tampil atau terlihat
        cy.get('[data-test="title"]').should('contain','Product')   //verifikasi judul yang ada pada element tersebut terdapat kata 'Product'
    })



})