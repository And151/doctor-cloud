import { Test, TestingModule } from '@nestjs/testing';
import { HospitalDoctorsController } from './hospital-doctors.controller';
import { HospitalDoctorsService } from './hospital-doctors.service';

describe('HospitalDoctorsController', () => {
  let controller: HospitalDoctorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HospitalDoctorsController],
      providers: [HospitalDoctorsService],
    }).compile();

    controller = module.get<HospitalDoctorsController>(HospitalDoctorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
