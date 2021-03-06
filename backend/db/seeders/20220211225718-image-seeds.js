'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Images', [
    { propertyId: 1, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/1+mediterranean/f0fbfbf0-c78d-4c03-8e29-90e425f384ad.webp' },
    { propertyId: 1, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/1+mediterranean/9a1eb206-abf7-4735-b88d-0611efe2ac7f.webp' },
    { propertyId: 1, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/1+mediterranean/7d6b043b-0314-468a-9df0-3d4cac8725e1.webp' },
    { propertyId: 2, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/2+baltic/53db31de-8740-467b-9b6f-1966b354d4cf.webp' },
    { propertyId: 2, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/2+baltic/20280b71-2054-4a9b-9efd-d0b1923c6d1a.webp' },
    { propertyId: 2, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/2+baltic/278e5309-182e-4741-887a-8f76e4db1391.webp' },
    { propertyId: 3, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/3+oriental/d61a2a75-2737-4914-be10-f853cd2d493a.webp' },
    { propertyId: 3, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/3+oriental/aaaccfa0-22e5-43c6-8bea-4a89f9d94b7b.webp' },
    { propertyId: 3, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/3+oriental/2efc8515-2681-4cf1-8e68-ab693d4bb252.webp' },
    { propertyId: 4, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/4+vermont/14608ed0-4ed6-41e0-9f8d-e372bbe5e80a.webp' },
    { propertyId: 4, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/4+vermont/4bfb280a-5cb8-474d-98d8-955e8987ae95.webp' },
    { propertyId: 4, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/4+vermont/fdd40225-9d89-49d8-8379-215588ad1286.webp' },
    { propertyId: 5, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/5+connecticut/3805e8c1-4281-42e8-96d4-2fedcd550c2c.webp' },
    { propertyId: 5, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/5+connecticut/7cf73cec-fd10-41c8-b5bd-fe21bd2a5d01.webp' },
    { propertyId: 5, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/5+connecticut/e2e863cb-8ab9-4ec5-a72c-c0e94624c206.webp' },
    { propertyId: 6, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/6+st+charles/3330d011-3bb8-40e2-8c66-acce14f371ef.webp' },
    { propertyId: 6, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/6+st+charles/d6f3f7d1-693b-4122-a959-422994d7e967.webp' },
    { propertyId: 6, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/6+st+charles/88e644cd-637d-4cc6-83ff-2931179d6d43.webp' },
    { propertyId: 7, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/7+states/f32bdb4d-050f-44e6-a9ca-9a0dc34f3853.webp' },
    { propertyId: 7, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/7+states/9b71c9f5-7d59-4c70-9b9c-e6ec2b123470.webp' },
    { propertyId: 7, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/7+states/578351ac-19fc-482b-85f7-191fc445b407.webp' },
    { propertyId: 8, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/8+virginia/c713c46f-37e6-4f7a-9a87-f6aed6de8b1f.webp' },
    { propertyId: 8, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/8+virginia/1ca8f635-6e94-4e64-bbcd-4eb9cb24cfb5.webp' },
    { propertyId: 8, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/8+virginia/33534d96-24d0-41e6-81ba-ade86a4ebbbf.webp' },
    { propertyId: 9, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/9+st+james/7962bf96-8879-4ec5-97fa-a900ae784d3c.webp' },
    { propertyId: 9, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/9+st+james/8e65d413-6980-4b02-aa28-b4cc1a8f8273.webp' },
    { propertyId: 9, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/9+st+james/ff4358fd-d293-4457-8d6e-181156046ee4.webp' },
    { propertyId: 10, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/10+tennessee/04e74aa9-23ea-4ee2-82f7-e0fc92327a8b.webp' },
    { propertyId: 10, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/10+tennessee/7c6cd075-671a-402e-b11b-5bbc3a34dae4.webp' },
    { propertyId: 10, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/10+tennessee/0a7a6ff4-d519-4e16-b95b-ec0cb639acee.webp' },
    { propertyId: 11, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/11+new+york/1341acaa-ebf2-444c-ae4d-3e05e905ab03.webp' },
    { propertyId: 11, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/11+new+york/d82fcc12-c5f4-4bba-8bb1-c37017260394.webp' },
    { propertyId: 11, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/11+new+york/8d298126-7440-4f7c-a360-3f39a0f53c6e.webp' },
    { propertyId: 12, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/12+kentucky/c859fee5-ca3a-4547-82cd-26dbbb7b8078.webp' },
    { propertyId: 12, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/12+kentucky/6de65cf8-63bc-41eb-a7d0-dbd1b63f9eff.webp' },
    { propertyId: 12, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/12+kentucky/992c746a-5871-4fb3-abdc-647251fd3f98.webp' },
    { propertyId: 13, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/13+indiana/a7d8c030-1f77-44b7-a75a-0ee6a71c192f.webp' },
    { propertyId: 13, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/13+indiana/58e23362-dc4e-4162-8d88-3111dec4779e.webp' },
    { propertyId: 13, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/13+indiana/7cf17ae3-8551-40a0-b032-b1a949f47319.webp' },
    { propertyId: 14, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/14+illinois/ea262ef4-a6b1-4e6a-b4b9-38f64687a27d.webp' },
    { propertyId: 14, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/14+illinois/dc607482-9ea4-4715-8aa7-f7c37820eeaf.webp' },
    { propertyId: 14, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/14+illinois/af4c6e72-ee80-46ff-8ecf-8733ecce3090.webp' },
    { propertyId: 15, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/15+atlantic/22387958-1637-49ba-bbb3-c2abb1ed0363.webp' },
    { propertyId: 15, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/15+atlantic/f6baa02c-4662-41ab-ad3d-32d5cdbdf223.webp' },
    { propertyId: 15, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/15+atlantic/2515ac0c-9a99-4998-8b4b-69cf418ba447.webp' },
    { propertyId: 16, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/16+ventnor/0850d05d-4bb4-47d9-b129-79334e1a4076.webp' },
    { propertyId: 16, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/16+ventnor/6599a3a3-d156-4eae-ad34-fea39fcd5ccd.webp' },
    { propertyId: 16, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/16+ventnor/0b74d291-dc7a-47a5-94a0-114b7a7fbc9c.webp' },
    { propertyId: 17, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/17+marven+gardens/af582ffe-9754-4570-8015-8abdc242933f.webp' },
    { propertyId: 17, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/17+marven+gardens/e8a1f282-e1f1-47e1-abbc-137ce9d5b55c.webp' },
    { propertyId: 17, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/17+marven+gardens/6e6678d3-f3ed-49b4-9f78-cd8dc8d579cd.webp' },
    { propertyId: 18, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/18+pacific/09ea0b81-9484-4fd7-8484-200fd46bbc9d.webp' },
    { propertyId: 18, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/18+pacific/c033da7c-f13b-4bd0-8473-5f3cbaabc0f1.webp' },
    { propertyId: 18, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/18+pacific/bbc2c0b7-4035-415b-b0ba-4e7eb894ec8b.webp' },
    { propertyId: 19, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/19+north+carolina/1001345763_24_0.jpg' },
    { propertyId: 19, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/19+north+carolina/++.jpg' },
    { propertyId: 19, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/19+north+carolina/1001345763_0.jpg' },
    { propertyId: 20, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/20+pennsylvania/b8fe2c32-53f6-4047-a467-fd7a00ba6ed8.webp' },
    { propertyId: 20, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/20+pennsylvania/32c1cfd6-ff04-420d-bcd6-1de94392a3a4.webp' },
    { propertyId: 20, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/20+pennsylvania/fbdc985a-ef49-4818-91d2-417120b77e8e.webp' },
    { propertyId: 21, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/21+park+place/3d339ba1-109e-4c60-b787-3e24c73e5861.webp' },
    { propertyId: 21, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/21+park+place/7b7d2b40-91d1-420f-b34b-9f39ea16d4c4.webp' },
    { propertyId: 21, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/21+park+place/89c06fcb-d310-4ff2-8e14-ae2cedda4835.webp' },
    { propertyId: 22, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/22+boardwalk/8170f13d-0e6f-4db8-be31-bb22ba074826.webp' },
    { propertyId: 22, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/22+boardwalk/6f69fee6-f824-404d-bdad-6ee31fa1d468.webp' },
    { propertyId: 22, imageURL:'https://monopolynb.s3.amazonaws.com/monopolynb_image_seeder/22+boardwalk/b945dca2-ab0a-4b2a-8da4-3e6e2992fbca.webp' },
  ], {}),
  
  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Images', null, {});
  }
};
