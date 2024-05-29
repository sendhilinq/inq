import { useState } from 'react';
import { Col, InputGroup, Label, Row } from 'reactstrap';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { MultiplesDatesHeading } from '../../../../../utils/Constant';

const MultiplesDates = () => {
    const [value, setValue] = useState<DateObject[]>([]);

    const handleChange = (newValue: DateObject | DateObject[] | null) => {
        if (newValue === null) {
            setValue([]);
        } else if (Array.isArray(newValue)) {
            setValue(newValue);
        } else {
            setValue([newValue]);
        }
    };

    return (
      <Row>
        <Col xxl="3">
          <Label className="box-col-12 text-start" check>{MultiplesDatesHeading}</Label>
        </Col>
        <Col xxl="9" className="box-col-12">
          <InputGroup className="flatpicker-calender">
            <DatePicker
              monthYearSeparator="::"
              inputClass="form-control"
              multiple
              value={value.length > 0 ? value : undefined}
              onChange={handleChange}
            />
          </InputGroup>
        </Col>
      </Row>
    );
};

export default MultiplesDates;
