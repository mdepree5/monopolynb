'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Properties', [
    { hostId: 1, title: 'Mediterranean Avenue', numberOfBeds: 2, price: 10, address: 'Mediterranean Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/1+mediterranean/7d6b043b-0314-468a-9df0-3d4cac8725e1.webp' },
    { hostId: 1, title: 'Baltic Avenue', numberOfBeds: 2, price: 20, address: 'Baltic Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/2+baltic/278e5309-182e-4741-887a-8f76e4db1391.webp' },
    { hostId: 1, title: 'Oriental Avenue', numberOfBeds: 2, price: 30, address: 'Oriental Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/3+oriental/aaaccfa0-22e5-43c6-8bea-4a89f9d94b7b.webp' },
    { hostId: 1, title: 'Vermont Avenue', numberOfBeds: 4, price: 30, address: 'N Vermont Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/4+vermont/14608ed0-4ed6-41e0-9f8d-e372bbe5e80a.webp' },
    { hostId: 1, title: 'Connecticut Avenue', numberOfBeds: 2, price: 40, address: 'N Connecticut Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/5+connecticut/7cf73cec-fd10-41c8-b5bd-fe21bd2a5d01.webp' },
    { hostId: 1, title: 'St. Charles Place', numberOfBeds: 2, price: 50, address: 'St Charles Pl', city: 'Ocean City', state: 'New Jersey', zipcode: '08226', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/6+st+charles/3330d011-3bb8-40e2-8c66-acce14f371ef.webp' },
    { hostId: 1, title: 'States Avenue', numberOfBeds: 4, price: 50, address: 'S States Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/7+states/9b71c9f5-7d59-4c70-9b9c-e6ec2b123470.webp' },
    { hostId: 1, title: 'Virginia Avenue', numberOfBeds: 4, price: 60, address: 'N Virginia Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/8+virginia/1ca8f635-6e94-4e64-bbcd-4eb9cb24cfb5.webp' },
    { hostId: 1, title: 'St. James Place', numberOfBeds: 4, price: 70, address: 'St James Pl', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/9+st+james/ff4358fd-d293-4457-8d6e-181156046ee4.webp' },
    { hostId: 2, title: 'Tennessee Avenue', numberOfBeds: 6, price: 70, address: 'S Tennessee Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/10+tennessee/0a7a6ff4-d519-4e16-b95b-ec0cb639acee.webp' },
    { hostId: 2, title: 'New York Avenue', numberOfBeds: 6, price: 80, address: 'N New York Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/11+new+york/d82fcc12-c5f4-4bba-8bb1-c37017260394.webp' },
    { hostId: 2, title: 'Kentucky Avenue', numberOfBeds: 10, price: 90, address: 'N Kentucky Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/12+kentucky/6de65cf8-63bc-41eb-a7d0-dbd1b63f9eff.webp' },
    { hostId: 2, title: 'Indiana Avenue', numberOfBeds: 12, price: 90, address: 'S Indiana Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/13+indiana/7cf17ae3-8551-40a0-b032-b1a949f47319.webp' },
    { hostId: 2, title: 'Illinois Avenue', numberOfBeds: 14, price: 100, address: 'S Dr Martin Luther King Jr Blvd', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/14+illinois/af4c6e72-ee80-46ff-8ecf-8733ecce3090.webp' },
    { hostId: 2, title: 'Atlantic Avenue', numberOfBeds: 20, price: 110, address: 'Atlantic Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/15+atlantic/22387958-1637-49ba-bbb3-c2abb1ed0363.webp' },
    { hostId: 2, title: 'Ventnor Avenue', numberOfBeds: 14, price: 110, address: 'Ventnor Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/16+ventnor/6599a3a3-d156-4eae-ad34-fea39fcd5ccd.webp' },
    { hostId: 2, title: 'Marven Gardens', numberOfBeds: 16, price: 120, address: 'Margate City', city: 'Margate City', state: 'New Jersey', zipcode: '08402', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/17+marven+gardens/af582ffe-9754-4570-8015-8abdc242933f.webp' },
    { hostId: 2, title: 'Pacific Avenue', numberOfBeds: 16, price: 130, address: 'Pacific Ave', city: 'Ventnor City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/18+pacific/c033da7c-f13b-4bd0-8473-5f3cbaabc0f1.webp' },
    { hostId: 2, title: 'North Carolina Avenue', numberOfBeds: 12, price: 130, address: 'N North Carolina Ave', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/19+north+carolina/1001345763_0.jpg' },
    { hostId: 2, title: 'Pennsylvania Avenue', numberOfBeds: 18, price: 150, address: 'Pennsylvania Ave', city: 'Absecon', state: 'New Jersey', zipcode: '08201', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/20+pennsylvania/fbdc985a-ef49-4818-91d2-417120b77e8e.webp' },
    { hostId: 2, title: 'Park Place', numberOfBeds: 22, price: 175, address: 'Park Pl', city: 'Ocean City', state: 'New Jersey', zipcode: '08226', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/21+park+place/89c06fcb-d310-4ff2-8e14-ae2cedda4835.webp' },
    { hostId: 2, title: 'Boardwalk', numberOfBeds: 24, price: 200, address: 'Boardwalk', city: 'Atlantic City', state: 'New Jersey', zipcode: '08401', cardImage='https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/22+boardwalk/b945dca2-ab0a-4b2a-8da4-3e6e2992fbca.webp' },
    
  ], {}),
  
  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Properties', null, {});
  }
};
