import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import {NoteListHeader} from './NoteListHeader';

if (Meteor.isClient){
  describe('NoteListHeader', function(){
    it('should call meteor call when button is clicked', function(){
      const spy = expect.createSpy();
      const wrapper = mount(<NoteListHeader meteorCall={spy}/>);
      wrapper.find('button').simulate('click');

      expect(spy.calls.length).toBeGreaterThan(0);
    });
  });
}
