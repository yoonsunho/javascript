# accounts/serializers.py
# 작성 후 settings/py에 등록해야함

from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers

class CustomRegisterSerializer(RegisterSerializer): # venv속 dj-auth가 제공하는 serializer가져와서 수정
    
    age = serializers.IntegerField(required = True)
    
    def get_cleaned_data(self):
        data = super().get_cleaned_data()  # 부모의 함수 호출해오기
        # 유효성 검사
        data['age'] = self.validated_data.get('age', '')    # front 에 age로 보내줘야함(약속)
        return data
        
    # 저장
    def save(self, request):
        user = super().save(request)
        user.age = self.validated_data.get('age','')
        user.save()
        return user
        
